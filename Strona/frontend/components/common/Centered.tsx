const Centered = (props: any) => {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {props.children}
        </div>
    )
}

export default Centered;