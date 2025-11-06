type StyleDecoratorsProps = {
    theme?: 'normal' | 'dark';
}

export const StyleDecorators = ({ theme = 'normal' }: StyleDecoratorsProps = {}) => {
    return (Story: any) => (
        <div className={`app ${theme}`} style={{ margin: '10px' }}>
            <Story />
        </div>
    )
}