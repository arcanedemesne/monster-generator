import React, { PureComponent } from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { ApplicationBar } from '../../containers/ApplicationBar';

class Dashboard extends PureComponent {
  render() {
    return (
      <Container fixed>
        <ApplicationBar />
        <Button variant="outlined" color="inherit">Material UI Button</Button>
      </Container>
    );
  }
}

export default Dashboard;
