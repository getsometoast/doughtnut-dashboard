import { AppBar, FlatButton } from 'material-ui'

const rightButtons = (props) => (
  <div>
    <FlatButton label='About' href='/about-us' />
    <FlatButton label='Home' href='/' />
    Count: {props.count}
  </div>
);

const Header = (props) => (
	<AppBar
		  title='The AppBar!'
		  onLeftIconButtonClick={() => (props.handleMenuClicked())}
		  iconElementRight={rightButtons(props)}
		  style={{padding: '1rem'}}
		/>
);
