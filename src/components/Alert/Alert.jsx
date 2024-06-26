import './Alert.css'

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];

  if (outlined) {
		classNames.push("is-outlined");
	}

  if (elevated) {
		classNames.push("is-elevated");
	}

  return <p className={classNames.join(" ")}>{children}</p>;
};
// const alertStyles = {
// margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
//   };
  
//   const getBgColor = variant => {
//     switch (variant) {
//       case "info":
//         return "blue";
//       case "success":
//         return "green";
//       case "error":
//         return "red";
//       case "warning":
//         return "orange";
//       default:
//         throw new Error(`Unsupported variant prop value - ${variant}`);
//     }
//   };


//  const Alert = ({ variant, children }) => {
//     return <p style={{...alertStyles,
//         backgroundColor: getBgColor(variant),
//     }}>{children}</p>;
    
//   };

  export default Alert;