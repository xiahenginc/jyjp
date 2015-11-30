//
//  WebPageViewController.swift
//  美团
//
//  Created by wxqdev on 15/6/2.
//  Copyright (c) 2015年 meituan.iteasysoft.com. All rights reserved.
//

import UIKit

class WebPageViewController: WebBaseViewController {

    override func viewDidLoad() {
        url = "http://www.mysq365.com/wap_ios/"
        myWebView = self.webView
        super.viewDidLoad()
    }

    @IBOutlet weak var webView: UIWebView!
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
//    override func loadurl(){
//        if let path = NSBundle.mainBundle().pathForResource("index", ofType: "html",inDirectory:"www") {
//            //            let baseURL = NSURL.fileURLWithPath(path.stringByDeletingLastPathComponent,isDirectory:true)
//            //            let requestURL = NSURL(string:path.lastPathComponent,relativeToURL:baseURL)
//            //            let request = NSURLRequest(URL: requestURL!)
//            //            webView.loadRequest(request)
//            
//            
//            if let htmlData = NSData(contentsOfFile: path){
//                var htmlString = NSString(data:htmlData,encoding:NSUTF8StringEncoding)!
//                let nshtmdata = htmlString.dataUsingEncoding(NSUTF8StringEncoding)
//                print("\(htmlString)")
//                let baseURL = NSURL(fileURLWithPath:path,isDirectory:true)
//                webView.loadData(nshtmdata!, MIMEType: "text/html", textEncodingName: "UTF-8", baseURL: baseURL)
//            }
//        }
//    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
