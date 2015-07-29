//
//  ViewController.swift
//  jyjp
//
//  Created by wxqdev on 15/6/5.
//  Copyright (c) 2015年 jyjp.xiaheng.net. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var webView: UIWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        let requestURL = NSURL(string:url)
        let request = NSURLRequest(URL: requestURL!)
        webView.loadRequest(request)
        
        webView?.opaque = false
        webView?.backgroundColor = UIColor.clearColor()
//        if let path = NSBundle.mainBundle().pathForResource("index", ofType: "html",inDirectory:"www") {
////            let baseURL = NSURL.fileURLWithPath(path.stringByDeletingLastPathComponent,isDirectory:true)
////            let requestURL = NSURL(string:path.lastPathComponent,relativeToURL:baseURL)
////            let request = NSURLRequest(URL: requestURL!)
////            webView.loadRequest(request)
//            
//
//            if let htmlData = NSData(contentsOfFile: path){
//                var htmlString = NSString(data:htmlData,encoding:NSUTF8StringEncoding)!
//                let nshtmdata = htmlString.dataUsingEncoding(NSUTF8StringEncoding)
//                
//                let baseURL = NSURL.fileURLWithPath(path.stringByDeletingLastPathComponent,isDirectory:true)
//                webView.loadData(nshtmdata, MIMEType: "text/html", textEncodingName: "UTF-8", baseURL: baseURL)
//            }
//        }

    }
    var url = "http://www.guorouwang.com/wap_ios/"

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

