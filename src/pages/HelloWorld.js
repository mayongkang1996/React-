import Square from './Square';
import { Card } from 'antd';

export default ()=>{
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgab(0, 0, 0, 0.2)',
        border:'1px solid #e8e8e8'
    }
    return (
        <div>
            <h1>hello,world</h1>
            <Square>点我</Square>
            <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
            <Card.Meta
                avatar={
                    <img alt='' style={{width: '64px', height: '64px', borderRadius:'32px'}}
                    src = 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' />
                }
                title="alipay"
                description = '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                />
                </Card>
        </div>
    );
}