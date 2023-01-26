import React from 'react';
import { Button, Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';

type Props = {
    children: React.ReactNode;
    fallback: React.ReactNode;
};

type State = {
    hasError: boolean;
    errorInfo: any;
};


export default class ErrorBoundary extends React.Component<Props> {
    state: State = {
        hasError: false,
        errorInfo: null,
    };

    componentDidCatch(error: Error, errorInfo: any) {
        this.setState({
            ...this.state,
            hasError: true,
            errorInfo: errorInfo,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h1" sx={{ color: 'error.main' }}>
                                Something went wrong
                            </Typography>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ mt: 2 }}
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >
                                Try again
                            </Button>
                            <Collapse in={this.state.errorInfo !== null}>
                                <Typography variant="body1" component={'div'} sx={{ mt: 2 }}>
                                    <pre style={{ whiteSpace: 'pre-wrap' }}>
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </Typography>
                            </Collapse>
                        </Box>
                    </Box>
                </>
            );
        }

        return this.props.children;
    }
}
