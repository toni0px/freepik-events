import { type SheetForm } from "@/components/types";
import { google } from "googleapis";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json() as SheetForm;

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        body.email, 
                        body.time, 
                        body.country ?? 'N/A',
                        body.city ?? 'N/A'
                    ]
                ]
            }
        });

        return NextResponse.json({
            success: true,
            data: response.data,
            message: 'Data submitted successfully'
        });

    } catch (error: any) {
        console.error('Error detallado:', error);
        
        return NextResponse.json({ 
            success: false,
            error: error.message 
        }, { 
            status: 500 
        });
    }
}