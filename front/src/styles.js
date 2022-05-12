import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
	appBar:{
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignitems: 'center'
	},
	heading:{
		color: 'rgba(0,100,160,1)',
	},
	image: {
		marginLeft: '15px',
		width: '80px',
		height: '80px'
	},

	[theme.breakpoints.down('sm')]: {
		mainContainer: {
			flexDirection: "column-reverse"
		}
	}
}))