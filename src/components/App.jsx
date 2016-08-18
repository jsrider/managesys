import React from 'react'


import styles from './style.css';
import { Link } from 'react-router'
import { Row, Col } from 'antd';



//导航栏
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Sider = React.createClass({
  getInitialState() {
    return {
      current: '1',
    };
  },
  handleClick(e) {
    console.log('click ', e);

    this.setState({
      current: e.key,

    });
  },

  render() {
    return (
      <Menu onClick={this.handleClick}
            style={{ width: 240 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline"
      >
        <Menu.Item key="1"><Link to="/about">胜利采油厂</Link></Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="folder" /><span>报表查询</span></span>}>

          <Menu.Item key="2"><Link to="/about">采油二矿</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/repos">采油三矿</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/repos">采油四矿</Link></Menu.Item>

          <SubMenu key="sub2" title={<span><Icon type="folder" /><span>阶段趋势查询</span></span>}>
            <Menu.Item key="5"><Link to="/repos">产量运行日报</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/repos">产量运行旬报</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/repos">产量运行月报</Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" title={<span><Icon type="folder" /><span>报警因素台账</span></span>}>

            <SubMenu key="sub4" title={<span><Icon type="folder" /><span>矿警因素台账</span></span>}>
              <Menu.Item key="8"><Link to="/repos">矿警因素台账</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/repos">矿警因素台账</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/repos">矿警因素台账</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="folder" /><span>队警因素台账</span></span>}>
              <Menu.Item key="11"><Link to="/repos">队警因素台账</Link></Menu.Item>
              <Menu.Item key="12"><Link to="/repos">队警因素台账</Link></Menu.Item>
              <Menu.Item key="13"><Link to="/repos">队警因素台账</Link></Menu.Item>
            </SubMenu>

          </SubMenu>

          <SubMenu key="sub6" title={<span><Icon type="folder" /><span>计量误差率统计</span></span>}>
            <Menu.Item key="14"><Link to="/repos">Repos</Link></Menu.Item>
            <Menu.Item key="15"><Link to="/repos">Repos</Link></Menu.Item>
          </SubMenu>

        </SubMenu>



        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Menu.Item key="9">选项9</Menu.Item>
          <Menu.Item key="10">选项10</Menu.Item>
          <Menu.Item key="11">选项11</Menu.Item>
          <Menu.Item key="12">选项12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  },
});






export default React.createClass({
  render() {
    return (


      <div>
        <Row>
          <Col span={24}>logo图片</Col>

        </Row>
        <Row>
          <Col span={4}>
            <div className="side" >
              <Sider />
            </div>
          </Col>


          <Col span={20}> {this.props.children}</Col>

        </Row>
      </div>





    )
  }
})

