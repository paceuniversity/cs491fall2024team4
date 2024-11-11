import '../theme.css';

import FooterMenu from '../components/footers/FooterMenu';

import { Flex, Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function CreateEvent() {
    return(
        <Flex gap="middle">
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer
                    <FooterMenu />
                </Footer>
            </Layout>
        </Flex>
    );
}

export default CreateEvent;