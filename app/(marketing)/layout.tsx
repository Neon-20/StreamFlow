const MarketingLayout = ({
    children
}:{
    children:React.ReactNode
}) =>{
    return (
        <main className="max-h-screen overflow-hidden
        ">
        {children}
        </main>
    )
}

export default MarketingLayout;
