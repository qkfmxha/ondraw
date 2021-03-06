Ext.define('TEST.view.Info',{
	extend:'Ext.Panel',
	xtype:'Info',
	
	config:{
		Title:'Info',
		iconCls:'',
		scrollable:false,
		
		items: [
			    {
					 xtype: 'titlebar',
				     docked: 'top',
				     title: '정보',
				     items:[
							{
								 xtype:'button',
								 text:'뒤로',
								 ui:'back',
								 align:'left',
								 
							},  
							
				            ]
				},
				{
			    	 xtype:'panel',
			    	 html:'<p>이 앱은 KT 앱개발자 양성 교육과정의 일환으로</p>'+
			    		  '<p>에코노베이션 스마트 스쿨 하이브리드 앱 개발 </p>'+
			    		  '<p>전문가과정  프로젝트로 개발되었습니다.</p>',
			    	 style:'font-size:0.7em;color:#999;padding:15px 15px 5px 15px;font-weight:bold;',
		        },   
                {
                	 xtype: 'button',
                     text: '버전 1.0.0',
                     id: 'btnInfo1',
                     ui: 'plain', 
                   
                 },
                 {
                 	 xtype: 'button',
                     text: '제작일자  : 2012.9.14 ',
                     id: 'btnInfo2',
                     ui: 'plain', 
                    
                  },
                  {
                  	 xtype: 'button',
                     text: '개발팀 : Hy - olleh ',
                     id: 'btnInfo3',
                     ui: 'plain', 
                     
                   },
                   {
  			    	 xtype:'panel',
  			    	 docked: 'bottom',
  			    	 html:'<p>© Hy-olleh</p> ',
  			    	 
  			    	 style:'font-size:0.6em;color:#999;padding:15px;text-align:center;',
  		           }
                   
                ]
		
		
		
	}
	
});