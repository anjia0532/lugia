import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import steps from '@lugia/lugia-web/dist/steps/lugia.steps.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseSteps =  require('./BaseSteps').default;  const OrientationSteps =  require('./OrientationSteps').default;  const TypeSteps =  require('./TypeSteps').default;  const StepsDemo =  require('./StepsDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'步骤条'} subTitle={'Steps'} desc={'引导用户按照流程完成任务的导航条'} />
                            <Demo title={'基本用法'} titleID={'steps-0'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport styled from \'styled-components\';\nimport { steps, Button, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nconst Step = steps.Step;\nconst Steps = steps.Steps;\nconst Wrapper = styled.div`\n  text-align: left;\n  margin: 50px;\n`;\nexport default class BaseSteps extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Steps]: {\n        width: 1000\n      },\n      [Widget.Step]: {\n        width: 350,\n        height: 100\n      }\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <p>基本使用,五种状态</p>\n          <Steps orientation=\"horizontal\" size={\'normal\'}>\n            <Step\n              title=\"1111\"\n              description={\'description111\'}\n              stepStatus=\"finish\"\n            />\n            <Step\n              title=\"222\"\n              description={\'description2\'}\n              stepStatus=\"process\"\n            />\n            <Step title=\"33\" description={\'description33\'} stepStatus=\"next\" />\n            <Step\n              title=\"444\"\n              description={\'description444\'}\n              stepStatus=\"wait\"\n            />\n            <Step\n              title=\"555\"\n              description={\'description5555\'}\n              stepStatus=\"error\"\n            />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <p>带有描述 居中显示</p>\n          <Steps orientation=\"horizontal\" size={\'normal\'} desAlign={\'center\'}>\n            <Step\n              title=\"1111\"\n              description={\'description111\'}\n              stepStatus=\"finish\"\n            />\n            <Step\n              title=\"222\"\n              description={\'description2\'}\n              stepStatus=\"process\"\n            />\n            <Step title=\"33\" description={\'description33\'} stepStatus=\"next\" />\n            <Step\n              title=\"444\"\n              description={\'description444\'}\n              stepStatus=\"wait\"\n            />\n            <Step\n              title=\"555\"\n              description={\'description5555\'}\n              stepStatus=\"error\"\n            />\n          </Steps>\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n"}</code>} desc={'步骤条基本用法,有五种状态'}  demo={<BaseSteps />}></Demo><Demo title={'方向'} titleID={'steps-1'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport styled from \'styled-components\';\nimport { steps, Button, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nconst Step = steps.Step;\nconst Steps = steps.Steps;\nconst VWrapper = styled.div`\n  text-align: left;\n  margin: 50px;\n  display: inline-block;\n`;\nexport default class OrientationSteps extends React.Component<any, any> {\n\n\n  render() {\n    const view = {\n      [Widget.Steps]: {\n        width: 1000\n      },\n      [Widget.Step]: {\n        width: 350,\n        height: 100\n      }\n    };\n    return (\n      <Theme config={view}>\n          <VWrapper>\n            <p>简洁风格 size mini</p>\n\n            <Steps orientation=\"vertical\" stepType=\"simple\" size=\"mini\">\n              <Step title=\"1111\" stepStatus=\"finish\" content=\"content1\" />\n              <Step title=\"222\" stepStatus=\"process\" content=\"content2\" />\n              <Step title=\"33\" stepStatus=\"next\" content=\"content3\" />\n              <Step title=\"444\" stepStatus=\"wait\" content=\"content4\" />\n              <Step title=\"555\" stepStatus=\"error\" content=\"content5\" />\n            </Steps>\n          </VWrapper>\n          <VWrapper>\n            <p>简洁风格 size normal</p>\n\n            <Steps orientation=\"vertical\" stepType=\"simple\" size=\"normal\">\n              <Step title=\"1111\" stepStatus=\"finish\" content=\"content1\" />\n              <Step title=\"222\" stepStatus=\"process\" content=\"content2\" />\n              <Step title=\"33\" stepStatus=\"next\" content=\"content3\" />\n              <Step title=\"444\" stepStatus=\"wait\" content=\"content4\" />\n              <Step title=\"555\" stepStatus=\"error\" content=\"content5\" />\n            </Steps>\n          </VWrapper>\n          <VWrapper>\n            <p>带有描述</p>\n            <Steps orientation=\"vertical\" stepType=\"simple\" size={\'normal\'}>\n              <Step\n                title=\"1111\"\n                description={\'description111\'}\n                stepStatus=\"finish\"\n              />\n              <Step\n                title=\"222\"\n                description={\'description2\'}\n                stepStatus=\"process\"\n              />\n              <Step title=\"33\" description={\'description33\'} stepStatus=\"next\" />\n              <Step\n                title=\"444\"\n                description={\'description444\'}\n                stepStatus=\"wait\"\n              />\n              <Step\n                title=\"555\"\n                description={\'description5555\'}\n                stepStatus=\"error\"\n              />\n            </Steps>\n          </VWrapper>\n          <VWrapper>\n            <p>半扁平风格 size normal</p>\n\n            <Steps orientation=\"vertical\" stepType=\"flat\" size=\"normal\">\n              <Step title=\"1111\" stepStatus=\"finish\" content=\"content1\" />\n              <Step title=\"222\" stepStatus=\"process\" content=\"content2\" />\n              <Step title=\"33\" stepStatus=\"next\" content=\"content3\" />\n              <Step title=\"444\" stepStatus=\"wait\" content=\"content4\" />\n              <Step title=\"555\" stepStatus=\"error\" content=\"content5\" />\n            </Steps>\n          </VWrapper>\n          <VWrapper>\n            <p>icon</p>\n            <Steps orientation=\"vertical\" stepType={\'icon\'} size={\'mini\'}>\n              <Step\n                icon={\'lugia-icon-financial_cloud\'}\n                title=\"1111\"\n                stepStatus=\"finish\"\n              />\n              <Step\n                icon={\'lugia-icon-financial_cloud\'}\n                title=\"222\"\n                stepStatus=\"process\"\n              />\n              <Step\n                icon={\'lugia-icon-financial_cloud\'}\n                title=\"333\"\n                stepStatus=\"next\"\n              />\n              <Step\n                icon={\'lugia-icon-financial_cloud\'}\n                title=\"444\"\n                stepStatus=\"wait\"\n              />\n              <Step\n                icon={\'lugia-icon-financial_cloud\'}\n                title=\"555\"\n                stepStatus=\"error\"\n              />\n            </Steps>\n          </VWrapper>\n          <VWrapper>\n            <p>点状 虚线 size normal</p>\n            <Steps orientation=\"vertical\" stepType={\'dot\'}>\n              <Step title=\"1111\" stepStatus=\"finish\" />\n              <Step title=\"222\" stepStatus=\"process\" isDashed={true} />\n              <Step title=\"33\" stepStatus=\"next\" isDashed={true} />\n              <Step title=\"444\" stepStatus=\"wait\" isDashed={true} />\n              <Step title=\"555\" stepStatus=\"error\" isDashed={true} />\n            </Steps>\n          </VWrapper>\n          <VWrapper>\n            <p>点状风格 size normal</p>\n            <Steps orientation=\"vertical\" stepType=\"dot\" size=\"normal\">\n              <Step title=\"1111\" stepStatus=\"finish\" content=\"content1\" />\n              <Step title=\"222\" stepStatus=\"process\" content=\"content2\" />\n              <Step title=\"33\" stepStatus=\"next\" content=\"content3\" />\n              <Step title=\"444\" stepStatus=\"wait\" content=\"content4\" />\n              <Step title=\"555\" stepStatus=\"error\" content=\"content5\" />\n            </Steps>\n          </VWrapper>\n      </Theme>\n    );\n  }\n}\n"}</code>} desc={'步骤条方向,垂直,水平'}  demo={<OrientationSteps />}></Demo><Demo title={'风格'} titleID={'steps-2'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nimport { steps, Button, Theme } from \'@lugia/lugia-web\';\nconst Step = steps.Step;\nconst Steps = steps.Steps;\nconst Wrapper = styled.div`\n  text-align: left;\n  margin: 50px;\n`;\nexport default class TypeSteps extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  render() {\n    const view = {\n      [Widget.Steps]: {\n        width: 1000\n      },\n      [Widget.Step]: {\n        width: 350,\n        height: 100\n      }\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <p>带有描述</p>\n          <Steps orientation=\"horizontal\" size={\'normal\'}>\n            <Step\n              title=\"1111\"\n              description={\'description111\'}\n              stepStatus=\"finish\"\n            />\n            <Step\n              title=\"222\"\n              description={\'description2\'}\n              stepStatus=\"process\"\n            />\n            <Step title=\"33\" description={\'description33\'} stepStatus=\"next\" />\n            <Step\n              title=\"444\"\n              description={\'description444\'}\n              stepStatus=\"wait\"\n            />\n            <Step\n              title=\"555\"\n              description={\'description5555\'}\n              stepStatus=\"error\"\n            />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <p>带有描述 居中显示</p>\n          <Steps orientation=\"horizontal\" size={\'normal\'} desAlign={\'center\'}>\n            <Step\n              title=\"1111\"\n              description={\'description111\'}\n              stepStatus=\"finish\"\n            />\n            <Step\n              title=\"222\"\n              description={\'description2\'}\n              stepStatus=\"process\"\n            />\n            <Step title=\"33\" description={\'description33\'} stepStatus=\"next\" />\n            <Step\n              title=\"444\"\n              description={\'description444\'}\n              stepStatus=\"wait\"\n            />\n            <Step\n              title=\"555\"\n              description={\'description5555\'}\n              stepStatus=\"error\"\n            />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <p>简洁风格 size mini</p>\n          <Steps orientation=\"horizontal\" stepType={\'simple\'} size={\'mini\'}>\n            <Step title=\"1111\" stepStatus=\"finish\" />\n            <Step title=\"222\" stepStatus=\"process\" />\n            <Step title=\"33\" stepStatus=\"next\" />\n            <Step title=\"444\" stepStatus=\"wait\" />\n            <Step title=\"555\" stepStatus=\"error\" />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <p>半扁平风格</p>\n          <Steps orientation=\"horizontal\" stepType={\'flat\'} size={\'mini\'}>\n            <Step title=\"1111\" stepStatus=\"finish\" />\n            <Step title=\"222\" stepStatus=\"process\" />\n            <Step title=\"33\" stepStatus=\"next\" />\n            <Step title=\"444\" stepStatus=\"wait\" />\n            <Step title=\"555\" stepStatus=\"error\" />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <p>半扁平风格</p>\n          <Steps orientation=\"horizontal\" stepType={\'flat\'} size={\'normal\'}>\n            <Step title=\"1111\" stepStatus=\"finish\" />\n            <Step title=\"222\" stepStatus=\"process\" />\n            <Step title=\"33\" stepStatus=\"next\" />\n            <Step title=\"444\" stepStatus=\"wait\" />\n            <Step title=\"555\" stepStatus=\"error\" />\n          </Steps>\n        </Wrapper>\n\n        <Wrapper>\n          <p>icon</p>\n          <Steps orientation=\"horizontal\" stepType={\'icon\'} size={\'mini\'}>\n            <Step icon={\'lugia-icon-financial_cloud\'} stepStatus=\"finish\" />\n            <Step icon={\'lugia-icon-financial_cloud\'} stepStatus=\"process\" />\n            <Step icon={\'lugia-icon-financial_cloud\'} stepStatus=\"next\" />\n            <Step icon={\'lugia-icon-financial_cloud\'} stepStatus=\"wait\" />\n            <Step icon={\'lugia-icon-financial_cloud\'} stepStatus=\"error\" />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <p>点状 虚线</p>\n          <Steps orientation=\"horizontal\" stepType={\'dot\'}>\n            <Step title=\"1111\" stepStatus=\"finish\" />\n            <Step title=\"222\" stepStatus=\"process\" isDashed={true} />\n            <Step title=\"33\" stepStatus=\"next\" isDashed={true} />\n            <Step title=\"444\" stepStatus=\"wait\" isDashed={true} />\n            <Step title=\"555\" stepStatus=\"error\" isDashed={true} />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <p>点状 实线</p>\n          <Steps orientation=\"horizontal\" stepType={\'dot\'}>\n            <Step title=\"1111\" stepStatus=\"finish\" />\n            <Step title=\"222\" stepStatus=\"process\" />\n            <Step title=\"33\" stepStatus=\"next\" />\n            <Step title=\"444\" stepStatus=\"wait\" />\n            <Step title=\"555\" stepStatus=\"error\" />\n          </Steps>\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n"}</code>} desc={'步骤条多种风格'}  demo={<TypeSteps />}></Demo><Demo title={'按步骤显示'} titleID={'steps-3'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport styled from \'styled-components\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport { steps, Button, Theme } from \'@lugia/lugia-web\';\nconst Step = steps.Step;\nconst Steps = steps.Steps;\nconst stepsData = [\n  {\n    title: \'First\',\n    content: \'First-content\'\n  },\n  {\n    title: \'Second\',\n    content: \'Second-content\'\n  },\n  {\n    title: \'Last\',\n    content: \'Third-content\'\n  }\n];\nconst StepContent = styled.div`\n  margin-top: 30px;\n  margin-left: 45px;\n  border: 1px solid #ccc;\n  height: 100px;\n`;\nconst ButtonContainer = styled.div`\n  margin-bottom: 30px;\n`;\nexport default class StepsDemo extends React.Component<Object, Object> {\n  constructor(props) {\n    super(props);\n    this.state = {\n      currentStepNumber: 1\n    };\n  }\n  next() {\n    const currentStepNumber =\n      this.state.currentStepNumber > 3 ? 1 : this.state.currentStepNumber + 1;\n    this.setState({ currentStepNumber });\n  }\n  pre() {\n    const currentStepNumber =\n      this.state.currentStepNumber <= 1 ? 3 : this.state.currentStepNumber - 1;\n    this.setState({ currentStepNumber });\n  }\n  render() {\n    const { currentStepNumber } = this.state;\n    const matchCurrentNumber = currentStepNumber > 0 && currentStepNumber <= 3;\n    const theCurrentStepNumber = matchCurrentNumber ? currentStepNumber : 1;\n    const content = matchCurrentNumber\n      ? stepsData[theCurrentStepNumber - 1].content\n      : \'\';\n    const view = {\n      [Widget.Steps]: {\n        width: 1000\n      },\n      [Widget.Step]: {\n        width: 350,\n        height: 100\n      }\n    };\n    return (\n      <div>\n        <Theme config={view}>\n          <ButtonContainer>\n            <Button type=\"primary\" onClick={() => this.pre()}>\n              pre\n            </Button>\n            <Button type=\"primary\" onClick={() => this.next()}>\n              Next\n            </Button>\n          </ButtonContainer>\n          <Steps\n            currentStepNumber={currentStepNumber}\n            stepType={\'simple\'}\n            size={\'normal\'}\n          >\n            {stepsData.map((item, i) => <Step title={item.title} />)}\n          </Steps>\n          <StepContent>{content}</StepContent>\n        </Theme>\n      </div>\n    );\n  }\n}\n"}</code>} desc={'逐步进行步骤条'}  demo={<StepsDemo />}></Demo>
                            <EditTables dataSource={steps} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#steps-0'} /><Link title={'方向'} href={'#steps-1'} /><Link title={'风格'} href={'#steps-2'} /><Link title={'按步骤显示'} href={'#steps-3'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         }   
        