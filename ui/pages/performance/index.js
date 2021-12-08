import { NoSsr } from '@material-ui/core';
import MesheryPerformanceComponent from '../../components/MesheryPerformance/Dashboard';
import { updatepagepath } from '../../lib/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import { getPath } from '../../lib/path';

class Performance extends React.Component {
  componentDidMount() {
    console.log(`path: ${getPath()}`);
    this.props.updatepagepath({ path: getPath() });
  }

  render() {
    return (
      <NoSsr>
        <Head>
          <title>Performance Dashboard | Meshery</title>
        </Head>
        <MesheryPerformanceComponent />
      </NoSsr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ updatepagepath: bindActionCreators(updatepagepath, dispatch), });

export default connect(null, mapDispatchToProps)(Performance);
