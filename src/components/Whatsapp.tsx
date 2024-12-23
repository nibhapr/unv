import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/images/dg.png';

const Whatsapp = () => {
    const logoUrl = logo.src;
    return <FloatingWhatsApp  
    accountName='unvdubai Technology Dubai' 
    phoneNumber='+971509162488' 
    avatar={logoUrl} 
    statusMessage="Live chat now"
    chatMessage="Welcome to DigitalLink Technology 🤝. How can we help?"
    />
}

export default Whatsapp;