import { makeStyles } from '@material-ui/styles'

export default makeStyles({
    mainContent:{
        minHeight:'90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    card:{
        height:'auto',
    },

    formulario:{
        height: '550px',
        padding: '24px',
    },

    instrucciones:{
        height: '550px',
        background:'#66C3E1',
        color: '#FFF',
        padding: '24px',
    },

    textFieldStyle:{
        marginBottom: 8,
    },

    buttonStyle:{
        height: '50px',
        background: '#E171A5',
        color: '#FFF',
        "&:hover": {
            backgroundColor: "#D86D9F"
        }
    }
})