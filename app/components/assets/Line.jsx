export default function Line({ className = "" }) {
    return (
      <div className={`${className}`}>
        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 1 146" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.1665" y1="0.5" x2="1.1665" y2="146.5" stroke="#262626" stroke-dasharray="10 10"/></svg>
      </div>
    );
  }