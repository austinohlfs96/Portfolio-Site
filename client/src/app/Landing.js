import React, { useState} from 'react'
import { MenuMenu, MenuItem, Menu, Segment } from 'semantic-ui-react'

const Landing = () => {
  // state = { activeItem: 'home' }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  const [menuState, setMenuState] = useState({activeItem: 'home'})

  const handleItemClick = (e, { name }) => setMenuState({ activeItem: name })

  const { activeItem } = menuState
  return (
    <>
      <Menu pointing secondary>
          <MenuItem
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <MenuItem
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <MenuItem
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <MenuMenu position='right'>
            <MenuItem
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </MenuMenu>
        </Menu>

        <Segment>
          <img src='/images/wireframe/media-paragraph.png' alt="example img" />
        </Segment>
    </>
  )
}

export default Landing;