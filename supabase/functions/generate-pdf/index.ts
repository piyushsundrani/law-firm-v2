import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { PDFDocument, StandardFonts, rgb } from "npm:pdf-lib@1.17.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { messages } = await req.json();

    const pdfDoc = await PDFDocument.create();
    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    let page = pdfDoc.addPage([595, 842]);
    const { width, height } = page.getSize();
    let yPosition = height - 80;
    const margin = 60;
    const maxWidth = width - (margin * 2);

    page.drawText('Sterling & Associates', {
      x: margin,
      y: yPosition,
      size: 24,
      font: timesRomanBold,
      color: rgb(0.1, 0.15, 0.25),
    });

    yPosition -= 20;
    page.drawText('Attorneys at Law', {
      x: margin,
      y: yPosition,
      size: 12,
      font: timesRoman,
      color: rgb(0.4, 0.4, 0.4),
    });

    yPosition -= 30;
    page.drawLine({
      start: { x: margin, y: yPosition },
      end: { x: width - margin, y: yPosition },
      thickness: 2,
      color: rgb(0.8, 0.6, 0.2),
    });

    yPosition -= 40;
    page.drawText('Consultation Summary', {
      x: margin,
      y: yPosition,
      size: 18,
      font: timesRomanBold,
      color: rgb(0.1, 0.15, 0.25),
    });

    yPosition -= 30;
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    page.drawText(`Date: ${currentDate}`, {
      x: margin,
      y: yPosition,
      size: 11,
      font: helvetica,
      color: rgb(0.3, 0.3, 0.3),
    });

    yPosition -= 40;

    for (const message of messages) {
      if (yPosition < 100) {
        page = pdfDoc.addPage([595, 842]);
        yPosition = height - 60;
      }

      const role = message.role === 'user' ? 'Client' : 'Legal Assistant';
      const roleColor = message.role === 'user' ? rgb(0.8, 0.6, 0.2) : rgb(0.1, 0.15, 0.25);

      page.drawText(`${role}:`, {
        x: margin,
        y: yPosition,
        size: 12,
        font: timesRomanBold,
        color: roleColor,
      });

      yPosition -= 18;

      const words = message.content.split(' ');
      let line = '';
      const lineHeight = 16;
      const fontSize = 10;

      for (const word of words) {
        const testLine = line + word + ' ';
        const textWidth = helvetica.widthOfTextAtSize(testLine, fontSize);

        if (textWidth > maxWidth && line !== '') {
          page.drawText(line, {
            x: margin,
            y: yPosition,
            size: fontSize,
            font: helvetica,
            color: rgb(0.2, 0.2, 0.2),
          });
          line = word + ' ';
          yPosition -= lineHeight;

          if (yPosition < 100) {
            page = pdfDoc.addPage([595, 842]);
            yPosition = height - 60;
          }
        } else {
          line = testLine;
        }
      }

      if (line !== '') {
        page.drawText(line, {
          x: margin,
          y: yPosition,
          size: fontSize,
          font: helvetica,
          color: rgb(0.2, 0.2, 0.2),
        });
        yPosition -= lineHeight;
      }

      yPosition -= 15;
    }

    if (yPosition < 150) {
      page = pdfDoc.addPage([595, 842]);
      yPosition = height - 60;
    }

    yPosition -= 30;
    page.drawLine({
      start: { x: margin, y: yPosition },
      end: { x: width - margin, y: yPosition },
      thickness: 1,
      color: rgb(0.8, 0.8, 0.8),
    });

    yPosition -= 30;
    page.drawText('Important Disclaimer', {
      x: margin,
      y: yPosition,
      size: 11,
      font: timesRomanBold,
      color: rgb(0.6, 0.2, 0.2),
    });

    yPosition -= 20;
    const disclaimer = 'This document contains general legal information only and does not constitute legal advice. The content of this consultation summary is confidential and for informational purposes. For advice specific to your situation, please schedule a formal consultation with one of our attorneys.';
    const disclaimerWords = disclaimer.split(' ');
    let disclaimerLine = '';

    for (const word of disclaimerWords) {
      const testLine = disclaimerLine + word + ' ';
      const textWidth = helvetica.widthOfTextAtSize(testLine, 9);

      if (textWidth > maxWidth && disclaimerLine !== '') {
        page.drawText(disclaimerLine, {
          x: margin,
          y: yPosition,
          size: 9,
          font: helvetica,
          color: rgb(0.4, 0.4, 0.4),
        });
        disclaimerLine = word + ' ';
        yPosition -= 14;
      } else {
        disclaimerLine = testLine;
      }
    }

    if (disclaimerLine !== '') {
      page.drawText(disclaimerLine, {
        x: margin,
        y: yPosition,
        size: 9,
        font: helvetica,
        color: rgb(0.4, 0.4, 0.4),
      });
    }

    const totalPages = pdfDoc.getPages().length;
    pdfDoc.getPages().forEach((pg, index) => {
      pg.drawText(`Sterling & Associates | 123 Legal Avenue, Suite 500 | New York, NY 10001 | (555) 123-4567`, {
        x: 60,
        y: 30,
        size: 8,
        font: helvetica,
        color: rgb(0.5, 0.5, 0.5),
      });

      pg.drawText(`Page ${index + 1} of ${totalPages}`, {
        x: width - 100,
        y: 30,
        size: 8,
        font: helvetica,
        color: rgb(0.5, 0.5, 0.5),
      });
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(pdfBytes, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="consultation-summary.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate PDF',
        details: error.message 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});