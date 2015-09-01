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
   
//    var timer: NSTimer?
//    var img1: UIImageView?
//    var img2: UIImageView?
//    var imgindex = true;
    
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
//        var widthimg = 140;
//        self.img1 = UIImageView(frame: CGRect(x: 0, y: 0, width: widthimg, height: widthimg))
//       // self.img1 = UIImageView()
//        self.img1?.image = UIImage(named: "wb_loading_frame1")
//        self.img1?.center = CGPoint(x: self.view.frame.width/2, y: self.view.frame.height/2)
//      
//        self.img2 = UIImageView(frame: CGRect(x: 0, y: 0, width: widthimg, height: widthimg))
//      //  self.img2 = UIImageView()
//        self.img2?.image = UIImage(named: "wb_loading_frame2")
//        self.img2?.center = CGPoint(x: self.view.frame.width/2, y: self.view.frame.height/2)
//        self.img1?.backgroundColor = UIColor.clearColor()
//        self.img2?.backgroundColor = UIColor.clearColor()
//        self.myWebView?.addSubview(self.img1!)
//        self.myWebView?.addSubview(self.img2!)
//        self.img1?.hidden = true
//        self.timer = NSTimer.scheduledTimerWithTimeInterval(0.1, target: self, selector: "timingFunction:", userInfo: nil, repeats: true)
//        self.timer?.fire()
    }
    

    
//    func dismissPreloader(){
//        self.timer?.invalidate()
//        self.img1?.removeFromSuperview()
//        self.img2?.removeFromSuperview()
//        
//    }
//
//
//    func timingFunction(timer: NSTimer) {
//        self.imgindex = !self.imgindex
//        self.img1?.hidden = self.imgindex
//        self.img2?.hidden = !self.imgindex
//    }
    
    // 加载完成的时候执行该方法
    func webViewDidFinishLoad(webView: UIWebView){
        println("webViewDidFinishLoad")
     //   self.dismissPreloader();
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
