import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const Article = styled.article`
    h1 {
        color: #f00;
    }
`

const ContentPage = (props) => {
    return (
        <Article>
            <ReactMarkdown source={props.content.default}/>
        </Article>
    )
}
ContentPage.getInitialProps = async ({req}) => {
    const content = await require('../content/test.md');
    console.log('content', content)
    return { content };
}

export default ContentPage;