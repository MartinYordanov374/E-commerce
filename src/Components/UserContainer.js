import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Navbar, Nav, NavbarBrand, NavLink, NavItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import $ from 'jquery'
import store from './store'
import './css/tasks.css'
import {FaGithub, FaAddressBook, FaIcons, FaTimes} from 'react-icons/fa'
class UserContainer extends Component {
    render(){

    let nextToDo = 0;
    const {tasks} = this.props
    const addTask=()=>
    {   
            store.dispatch({
                type: 'addTask',
                text:  $('.form-control').val()
            })
            $('.form-control').val('')
    }
    const clearList=()=>
    {
        store.dispatch({
            type: 'removeTask',
            text:  ''
        })
    }
    return (
        <div className='mainDiv'>
            <Navbar variant='dark' bg='success'>
                <NavbarBrand>To-Do List Manager</NavbarBrand>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink className='githubIconLink' href='https://github.com/GoofyGalaxy374?tab=repositories'>
                            <FaGithub size={25}></FaGithub>y
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <h1 className='enterTaskHeader'>Enter Task</h1>
            <input className='enterTaskField form-control' placeholder='Enter task'></input>
            <Button className='submitTaskButton' variant='success' onClick={()=>addTask()}><strong>Add Task</strong></Button>
            <Button className='submitTaskButton' variant='success' onClick={()=>clearList()}><strong><FaTimes size={19}></FaTimes>Clear the Tasks</strong></Button>

            {tasks.map(task=>
                <div className='taskDivHeader'key={task.id}>
                    <div className = 'taskDiv'>
                        <p className='taskId'>{task.id}</p>
                        <p className='taskText'>{task.text}</p>
                    </div>
                </div>)}
            <div className='footer'>
                <div className='row'>
                    <div className='footer-about col-sm-4 col-lg-4 col-lg-3'>
                        <h1 className='footerInfoHeader'><span className='footerInfoHeaderLeftSide'>About</span> Me</h1>
                        <h2 className='footerInfoHolder'>I am a web developer, focused on front-end technologies, more specifically the React Framework</h2>
                    </div>
                    <div className='footer-about col-sm-4 col-lg-4 col-lg-3'>
                        <h1 className='footerInfoHeader'><span className='footerInfoHeaderLeftSide'>About</span> the project</h1>
                        <h2 className='footerInfoHolder'>This is a project I've worked on as a part of learning how to use Redux and I am very proud of it!</h2>
                    </div>
                    <div className='footer-about col-sm-4 col-lg-4 col-lg-3'>
                        <h1 className='footerInfoHeader'>
                            <span className='footerInfoHeaderLeftSide'>Check</span> the project out on <span className='footerInfoGithubLeftSide'>Git</span><span className='footerInfoGithubRightSide'>Hub</span> and other info
                        </h1>
                        <h2 className='footerInfoHolder'> <a class='gitHubLink' href='https://github.com/GoofyGalaxy374/To-Do-List-Manager'><FaGithub size={25}></FaGithub> Check the code out</a></h2>
                        <h2 className='footerInfoHolder'> <a class='gitHubLink' href='https://martinyordanov.netlify.app'><FaAddressBook size={25}></FaAddressBook> My Portfolio website</a></h2>
                        <h2 className='footerInfoHolder'><a class='gitHubLink' href='https://favicon.io'><FaIcons size={25}></FaIcons>Icons from favicon</a></h2>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
}
const mapStateToProps=(state)=>
{
    return{
        tasks: state
    }
}
export default connect(mapStateToProps)(UserContainer)
