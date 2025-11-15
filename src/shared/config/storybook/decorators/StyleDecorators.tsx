type StyleDecoratorsProps = {
    theme?: 'normal' | 'dark';
};

export const StyleDecorators = ({ theme = 'normal' }: StyleDecoratorsProps = {}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (Story: any) => (
        <div className={`app ${theme}`} style={{ margin: '10px' }}>
            <Story />
        </div>
    );
};
