

const Logo = () => {
  console.log("Logo component loaded!"); 
  return (
    <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="100" fill="none"/>
      <text x="20" y="58" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="40" letterSpacing="1">
        <tspan fill="#FF3A3A">ELE</tspan><tspan fill="#333333">VATE</tspan>
      </text>
      <text x="290" y="58" fontFamily="Arial, sans-serif" fontStyle="italic" fontWeight="300" fontSize="26" fill="#666666">SPORT</text>
      <line x1="20" y1="70" x2="380" y2="70" stroke="#333333" strokeWidth="2"/>
      <text x="180" y="95" fontFamily="Arial, sans-serif" fontStyle="italic" fontSize="20" fill="#666666" textAnchor="middle">performance elevated</text>
    </svg>
  );
};

export default Logo;

