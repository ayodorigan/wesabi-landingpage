import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/254115691220', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}

export default WhatsAppButton;
