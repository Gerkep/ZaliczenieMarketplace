const ProgressBar = (props: {bgcolor: string, completed: string, height: string, width: string}) => {
    const { bgcolor, completed, height, width } = props;
  
    const containerStyles = {
      height: `${height}`,
      width: `${width}`,
      backgroundColor: "#e0e0de",
      borderRadius: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;