module.exports = {
  title: '3mm的博客', 
  description : '和我一起在计算机的时间里面遨游吧',
  base : '/',
  themeConfig : {
    nav : [
        { text: '博客',
		  items:[
		  { text:'Java',link: '/Java/' }
		]},
        { text: '算法和数据结构', link: '/algorithm' },
        { text: '相关链接', link: '/linkdetail' }
    ],
	sidebar:[
		{
			title:'Java',
			children:['/Java/Java简介.md','/Java/Java2.md','/Java/Java3.md']
		}]
  }
}