import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    MantineProvider,
} from '@mantine/core';
import { useState, useEffect } from 'react';

import { useMutation, gql, useQuery } from '@apollo/client';
import client from '../../../graphql-client';

const LOGIN_MUTATION = gql`
    mutation Login($username: String!, $password: String!, $rememberMe: Boolean!) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ... on CurrentUser {
                id
            }
            __typename
        }
    }
`;

const TOTAL_PRODUCTS_QUERY = gql`
    {
        products(options: {}) {
            totalItems
        }
    }
`;

export function AuthenticationForm() {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    // This useEffect will only run once, during the first render
    useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    const [loginMutation] = useMutation(LOGIN_MUTATION, { client });
    const { loading, error, data } = useQuery(TOTAL_PRODUCTS_QUERY, { client, skip: !userId });

    const handleSignIn = async () => {
        try {
            const { data } = await loginMutation({
                variables: {
                    username,
                    password,
                    rememberMe,
                },
            });
            if (data?.login && data.login.__typename === 'CurrentUser') {
                console.log('Login success');
                setIsLoggedIn(true);
                setUserId(data.login.id);
                const authToken = data?.login?.context?.response?.headers?.get('vendure-auth-token'); // Get the token from the response headers
                localStorage.setItem('vendure-auth-token', authToken); // Store the token
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <>
            {initialRenderComplete ? (
                <MantineProvider
                    theme={{
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    <Container size={420} my={40}>
                        <Title
                            align="center"
                            sx={theme => ({ fontFamily: `${theme.fontFamily}`, fontWeight: 900 })}
                        >
                            Welcome back!
                        </Title>
                        <Text color="dimmed" size="sm" align="center" mt={5}>
                            Do not have an account yet?{' '}
                            <Anchor size="sm" component="button" color="red.6">
                                Create account
                            </Anchor>
                        </Text>

                        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                            <TextInput
                                label="Username"
                                placeholder="Your username"
                                required
                                value={username}
                                onChange={event => setUsername(event.currentTarget.value)}
                            />
                            <PasswordInput
                                label="Password"
                                placeholder="Your password"
                                required
                                mt="md"
                                value={password}
                                onChange={event => setPassword(event.currentTarget.value)}
                            />
                            <Group position="apart" mt="lg">
                                <Checkbox
                                    label="Remember me"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <Anchor component="button" size="sm" color="red.6">
                                    Forgot password?
                                </Anchor>
                            </Group>
                            <Button fullWidth mt="xl" color="red.6" onClick={handleSignIn}>
                                Sign in
                            </Button>
                        </Paper>

                        {/* display the userid of the current user here */}
                        {userId && (
                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                Logged-in User ID: {userId}
                            </div>
                        )}

                        {/* display the total number of products here */}
                        {userId && data && (
                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                Total Products: {data.products.totalItems}
                            </div>
                        )}
                    </Container>
                </MantineProvider>
            ) : null}
        </>
    );
}
