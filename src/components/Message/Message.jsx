const Message = ({author = 'default', message, children}) => {
    
  return (
    <div>
      <p>Author: {author}</p>
      <p>{message}</p>
      <p>{children}</p>
    </div>
  );
};

export default Message;
