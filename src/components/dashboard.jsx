import React from 'react';
import { ThemeProvider } from 'styled-components'
import { theme, Box, Header } from '@adminjs/design-system'
import { styled } from '@adminjs/design-system/styled-components'
import { PieChartComponent, LineChartComponent, AreaChartComponent } from './molecules'
import { Column, Row, Card, CustomTable } from './atoms';
import { categoryColums, productColums } from '../constants/table'

const BoxWrapper = styled(Box)`
  padding: 24px 30px;
`

const data = [
    { name: 'John', surname: 'Doe', gender: 'Male', age: 57 },
    { name: 'Joanna', surname: 'K', gender: 'Female', age: 32 },
    { name: 'Patrick', surname: 'Jogs', gender: 'Male', age: 35 },
    { name: 'Elisabeth', surname: 'Briggs', gender: 'Female', age: 28 },
    { name: 'Jda', surname: 'Karo', gender: 'Female', age: 22 },
];

const DashboardComponent = () => {
    return <ThemeProvider theme={theme}>
        <BoxWrapper>

            <Row gap="30">
                <Column xs="12" lg="12" md="12" sm="12">
                    <Header.H3>Hello Thinh Pham</Header.H3>
                </Column>
                <Column xs="12" lg="12" md="12" sm="12" >
                    <Card title="Sales Overviews">
                        <AreaChartComponent />
                    </Card>
                </Column>
                <Column xs="12" lg="5" md="12" sm="12"  >
                    <Card title="Product Status">
                        <PieChartComponent />
                    </Card>
                </Column>
                <Column xs="12" lg="7" md="12" sm="12" >
                    <Card title="Customer">
                        <LineChartComponent />
                    </Card>
                </Column>
                <Column xs="12" lg="5" md="12" sm="12" >
                    <Card title="Sales By Category">
                        <CustomTable columns={categoryColums} data={data} />
                    </Card>
                </Column>
                <Column xs="12" lg="7" md="12" sm="12" >
                    <Card title="Most Sold Products">
                        <CustomTable columns={productColums} data={data} />
                    </Card>
                </Column>
            </Row>
        </BoxWrapper>
    </ThemeProvider>
};

export default DashboardComponent;
