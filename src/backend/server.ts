import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or your email service
        auth: {
            user: 'YOUR_EMAIL@gmail.com', // Your email
            pass: 'YOUR_EMAIL_PASSWORD', // Your email password or app password
        },
    });

    const mailOptions = {
        from: 'YOUR_EMAIL@gmail.com',
        to: 'WORKER_EMAIL@gmail.com', // The email where you want to receive the sign-ups
        subject: 'New Newsletter Subscription',
        text: `New subscriber: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Subscription successful!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});