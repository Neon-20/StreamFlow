const MarketingLayout = ({
    children
}:{
    children:React.ReactNode
}) =>{
    return (
        <main className="max-h-screen overflow-x-hidden overflow-y-hidden
        mx-auto">
        {children}
        </main>
    )
}

export default MarketingLayout;
