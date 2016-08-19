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

        <SubMenu key="sub1" title={<span><Icon type="folder" /><span>胜利油田天然气计量</span></span>}>


          <SubMenu key="sub2" title={<span><Icon type="folder" /><span>流程</span></span>}>
            <Menu.Item key="1"><Link to="/about">坨一站</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">坨二站</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/repos">坨三站</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/repos">坨四站</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/repos">坨五站</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/repos">坨六站</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/repos">宁海站</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/repos">中心站</Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" title={<span><Icon type="folder" /><span>实时监控</span></span>}>

            <SubMenu key="sub4" title={<span><Icon type="folder" /><span>数据</span></span>}>
              <Menu.Item key="9"><Link to="/repos">坨一站</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/repos">坨二站</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/repos">坨三站</Link></Menu.Item>
              <Menu.Item key="12"><Link to="/repos">坨四站</Link></Menu.Item>
              <Menu.Item key="13"><Link to="/repos">坨五站</Link></Menu.Item>
              <Menu.Item key="14"><Link to="/repos">坨六站</Link></Menu.Item>
              <Menu.Item key="15"><Link to="/repos">宁海站</Link></Menu.Item>
              <Menu.Item key="16"><Link to="/repos">中心站</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="folder" /><span>曲线</span></span>}>
              <Menu.Item key="17"><Link to="/repos">坨一站</Link></Menu.Item>
              <Menu.Item key="18"><Link to="/repos">坨二站</Link></Menu.Item>
              <Menu.Item key="19"><Link to="/repos">坨三站</Link></Menu.Item>
              <Menu.Item key="20"><Link to="/repos">坨四站</Link></Menu.Item>
              <Menu.Item key="21"><Link to="/repos">坨五站</Link></Menu.Item>
              <Menu.Item key="22"><Link to="/repos">坨六站</Link></Menu.Item>
              <Menu.Item key="23"><Link to="/repos">宁海站</Link></Menu.Item>
              <Menu.Item key="24"><Link to="/repos">中心站</Link></Menu.Item>
            </SubMenu>

          </SubMenu>

          <SubMenu key="sub6" title={<span><Icon type="folder" /><span>日报</span></span>}>
            <SubMenu key="sub7" title={<span><Icon type="folder" /><span>数据</span></span>}>
              <Menu.Item key="25"><Link to="/repos">坨一站</Link></Menu.Item>
              <Menu.Item key="26"><Link to="/repos">坨二站</Link></Menu.Item>
              <Menu.Item key="27"><Link to="/repos">坨三站</Link></Menu.Item>
              <Menu.Item key="28"><Link to="/repos">坨四站</Link></Menu.Item>
              <Menu.Item key="29"><Link to="/repos">坨五站</Link></Menu.Item>
              <Menu.Item key="30"><Link to="/repos">坨六站</Link></Menu.Item>
              <Menu.Item key="31"><Link to="/repos">宁海站</Link></Menu.Item>
              <Menu.Item key="32"><Link to="/repos">中心站</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title={<span><Icon type="folder" /><span>曲线</span></span>}>
              <Menu.Item key="33"><Link to="/repos">坨一站</Link></Menu.Item>
              <Menu.Item key="34"><Link to="/repos">坨二站</Link></Menu.Item>
              <Menu.Item key="35"><Link to="/repos">坨三站</Link></Menu.Item>
              <Menu.Item key="36"><Link to="/repos">坨四站</Link></Menu.Item>
              <Menu.Item key="37"><Link to="/repos">坨五站</Link></Menu.Item>
              <Menu.Item key="38"><Link to="/repos">坨六站</Link></Menu.Item>
              <Menu.Item key="39"><Link to="/repos">宁海站</Link></Menu.Item>
              <Menu.Item key="40"><Link to="/repos">中心站</Link></Menu.Item>
            </SubMenu>
          </SubMenu>

          <SubMenu key="sub9" title={<span><Icon type="folder" /><span>月报</span></span>}>
            <SubMenu key="sub10" title={<span><Icon type="folder" /><span>数据</span></span>}>
              <Menu.Item key="41"><Link to="/repos">坨一站</Link></Menu.Item>
              <Menu.Item key="42"><Link to="/repos">坨二站</Link></Menu.Item>
              <Menu.Item key="43"><Link to="/repos">坨三站</Link></Menu.Item>
              <Menu.Item key="44"><Link to="/repos">坨四站</Link></Menu.Item>
              <Menu.Item key="45"><Link to="/repos">坨五站</Link></Menu.Item>
              <Menu.Item key="46"><Link to="/repos">坨六站</Link></Menu.Item>
              <Menu.Item key="47"><Link to="/repos">宁海站</Link></Menu.Item>
              <Menu.Item key="48"><Link to="/repos">中心站</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub11" title={<span><Icon type="folder" /><span>曲线</span></span>}>
              <Menu.Item key="49"><Link to="/repos">坨一站</Link></Menu.Item>
              <Menu.Item key="50"><Link to="/repos">坨二站</Link></Menu.Item>
              <Menu.Item key="51"><Link to="/repos">坨三站</Link></Menu.Item>
              <Menu.Item key="52"><Link to="/repos">坨四站</Link></Menu.Item>
              <Menu.Item key="53"><Link to="/repos">坨五站</Link></Menu.Item>
              <Menu.Item key="54"><Link to="/repos">坨六站</Link></Menu.Item>
              <Menu.Item key="55"><Link to="/repos">宁海站</Link></Menu.Item>
              <Menu.Item key="56"><Link to="/repos">中心站</Link></Menu.Item>
            </SubMenu>
          </SubMenu>

          <SubMenu key="sub12" title={<span><Icon type="exclamation-circle" /><span>报警处理</span></span>}>

          </SubMenu>
          <SubMenu key="sub13" title={<span><Icon type="setting" /><span>设置</span></span>}>

          </SubMenu>


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
          <Col span={24} className="banner"></Col>

        </Row>
        <Row>
          <Col span={4}>
            <div className="side" >
              <Sider />
            </div>
          </Col>


          <Col span={20}>
            <div>
              {this.props.children}
            </div>
          </Col>

        </Row>
      </div>





    )
  }
})

