//
//  WebBaseViewController.swift
//  美团
//
//  Created by wxqdev on 15/6/16.
//  Copyright (c) 2015年 meituan.iteasysoft.com. All rights reserved.
//

import UIKit



class WebBaseViewController: UIViewController,UIWebViewDelegate {
    var webjs: WebJsHelper?
    var url = ""
    var myWebView:UIWebView?
    var preloadWebView:UIWebView!;
   
    override func viewDidLoad() {
        super.viewDidLoad()
        webjs = WebJsHelper();
        webjs?.createBridge(self.myWebView, vc: self);
        self.myWebView?.delegate = self;
        
        NSNotificationCenter.defaultCenter().addObserver(self, selector: "onLoginRefresh:", name: "onLoginRefresh", object: nil)
        self.navigationController?.navigationBarHidden = true
        
        loadurl()

    }
    
    deinit {
        NSNotificationCenter.defaultCenter().removeObserver(self)
    }
    
    func onLoginRefresh(notification: NSNotification){
        refreshPage()
    }
    

    // 开始加载的时候执行该方法
    func webViewDidStartLoad(webView: UIWebView){
        println("webViewDidStartLoad");
        var filePath = NSBundle.mainBundle().pathForResource("loading1", ofType: "gif");
        let preloadGif = NSData(contentsOfFile: filePath!);
      //  var viewframe = CGRect(origin: CGPoint(x:self.view.frame.width/2-20,y:self.view.frame.height/2-20),size: CGSize(width: 20, height: 20));
        var viewframe = self.view.frame;
        self.preloadWebView = UIWebView(frame: viewframe);
        
        if let path = NSBundle.mainBundle().pathForResource("index", ofType: "html",inDirectory:"www") {
            if let htmlData = NSData(contentsOfFile: path){
                var htmlString = NSString(data:htmlData,encoding:NSUTF8StringEncoding)!
                let nshtmdata = htmlString.dataUsingEncoding(NSUTF8StringEncoding)

                let baseURL = NSURL.fileURLWithPath(path.stringByDeletingLastPathComponent,isDirectory:true)
                self.preloadWebView .loadData(nshtmdata, MIMEType: "text/html", textEncodingName: "UTF-8", baseURL: baseURL)
            }
        }
       // self.preloadWebView.alpha = 50;
        self.preloadWebView.opaque = false
        self.preloadWebView.backgroundColor = UIColor.clearColor()
        self.myWebView?.addSubview(preloadWebView);

    }
    

    
    func dismissPreloader(){
            
            UIView.animateWithDuration(0.8, delay: 0, options: UIViewAnimationOptions.CurveEaseOut, animations: {
        
        self.preloadWebView.alpha = 0;
        
        }, completion: nil);
            
            UIView.animateWithDuration(0.1, delay: 0.8, options: UIViewAnimationOptions.CurveEaseOut, animations: {
            
            self.preloadWebView.removeFromSuperview();
            
            }, completion: nil);
            
    }
    
    // 加载完成的时候执行该方法
    func webViewDidFinishLoad(webView: UIWebView){
        println("webViewDidFinishLoad")
                self.dismissPreloader();
    }
       
    func refreshPage(){
       // loadurl()
        println("refresh page:\(self.myWebView?.request!.URL!.absoluteString)")
        myWebView?.reload()
    }
    
    func onClickTest(sender: UIViewController) {
//        var txt:String! = "这是个测试"
//        let jsonRes = JSON(["type":"req","param1":"success","param2":txt])
//        bridge.callHandler("calljs",data:jsonRes.object,responseCallback:{
//            data  in
//            let json = JSON(data)
//
//            if let p2 = json["param2"].string{
//                println("recv json===>\(p2)")
//            }
//            
//            
//        })
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
   
    func loadurl(){
        let requestURL = NSURL(string:url)
        let request = NSURLRequest(URL: requestURL!)
        myWebView?.loadRequest(request)
        myWebView?.opaque = false
        myWebView?.backgroundColor = UIColor.clearColor()
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
