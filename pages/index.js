import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

const theme = {
    colors: {
        primary: 'black'
    }
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
`;

const Article = styled.article`
    max-width: 36%;

    h1 {
        margin-bottom: 0px;
    }
    p, i {

    }
    p {
        margin-top: 0px;
    }
`

const Index = () => {
    return (
        <ThemeProvider theme={theme}>
            <Main>
                <Article>
                    <h1>start·up·ol·o·gy</h1>
                    <p>/ˈstärˌdəpˈäləjē/</p>
                    <section>
                        <i>noun</i>
                        <p>the study of early-stage, high-risk enterprises</p>
                    </section>
                </Article>
            </Main>
        </ThemeProvider>
    )
}

export default Index;