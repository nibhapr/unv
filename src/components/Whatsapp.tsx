import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/images/dg.png';

const Whatsapp = () => {
    const logoUrl = logo.src;
    return <FloatingWhatsApp  
    accountName='Digital Link Technology Dubai' 
    phoneNumber='+917012749976' 
    avatar={logoUrl} 
    statusMessage="Live chat now"
    chatMessage="Welcome to Digital Link Technology 🤝. How can we help?"
    />
}

export default Whatsapp;