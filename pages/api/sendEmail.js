import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Récupération des données du formulaire à partir du corps de la requête
        const { firstName, lastName, company, email, phoneNumber, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user: 'exemple@gmail.com',  // a changer
                pass: 'xxxxxxx' //a changer
            }
        });

        const mailOptions = {
            from: 'exemple@gmail.com',
            to: 'exemple@gmail.com', // Changez ceci pour l'adresse de réception souhaitée
            subject: 'Nouvelle soumission de formulaire de contact',
            text: `Vous avez reçu un nouveau message de :\n\nNom : ${firstName} ${lastName}\nEmail : ${email}\nTéléphone : ${phoneNumber}\nCompagnie : ${company}\nMessage : ${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erreur lors de l\'envoi de l\'email', error);
                res.status(500).json({ message: "Erreur lors de l'envoi de l'email", error });
            } else {
                res.status(200).json({ message: 'Email envoyé avec succès!', info });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Méthode non autorisée');
    }
}
