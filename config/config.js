export default {
    singular: true,
    plugins:[
        ['umi-plugin-react',{}],
    ],
    routes:[{
        path: '/',
        component: './HelloWorld',
    },
    {
        path: '/users',
        component: './Users',
    }
]
};