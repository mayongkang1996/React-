export default {
    // singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    routes:[{
        path: '/',
        component: './HelloWorld',
    },
    {
        path: '/users',
        component: './Users',
    },
    // {
    //     path: '/shoppingList',
    //     component: './ShoppingList'
    // }
    {
        path: '/content',
        component: './Content'
    },
    {
        path: '/demo',
        component: './Demo'
    }
]
};