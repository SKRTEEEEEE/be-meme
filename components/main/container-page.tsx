interface ContainerPageProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props

    return (
        <main className="w-full max-w-6xl px-4 h-2/3 mx-auto mt-40 md:pb-0 md:px-6">
            {children}
        </main>
    );
}

export default ContainerPage;