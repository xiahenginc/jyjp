//
//  AppDelegate.swift
//  jyjp
//
//  Created by wxqdev on 15/6/5.
//  Copyright (c) 2015年 jyjp.xiaheng.net. All rights reserved.
//

import UIKit
typealias onWxLoginResult = (JSON!) ->Void
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate,WXApiDelegate {

    var window: UIWindow?


    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        // Override point for customization after application launch.
        
        WXApi.registerApp("wx8ff03d60decfa26a")
        return true
    }

    func applicationWillResignActive(application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(application: UIApplication) {
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }
    func onReq(req: BaseReq!) {
        println("onReq called")
    }
    func onResp(resp: BaseResp!) {
        println("onResp called")
    }

    func application(application: UIApplication, handleOpenURL url: NSURL) -> Bool{
        if url.scheme == "wx8ff03d60decfa26a" {
            return WXApi.handleOpenURL(url, delegate: self)
        }
        else if url.scheme == "tencent1104714921" {
            return TencentOAuth.HandleOpenURL(url)
        }
        return true
        
    }
    var alipayResult:onWxLoginResult?
    func application(application: UIApplication, openURL url: NSURL, sourceApplication: String?, annotation: AnyObject?) -> Bool {
        if url.scheme == "wx8ff03d60decfa26a" {
            return WXApi.handleOpenURL(url, delegate: self)
        }
        else if url.scheme == "tencent1104714921" {
            return TencentOAuth.HandleOpenURL(url)
        }
        if url.host == "safepay" {
            AlipaySDK.defaultService().processOrderWithPaymentResult(url, standbyCallback: {(result) -> Void in
                print(result as NSDictionary)
                
                var resultTxt:String!="failed"
                var txt:String! = "支付失败"
                if (result != nil) {
                    print("\(result)")
                    txt = result["memo"] as! String
                    var status = result["resultStatus"] as! NSObject
                    if ("\(status)" == "9000") {
                        
                        resultTxt = "success"
                    }
                }
                else{
                    txt =  "无法获取结果"
                }
                
                let jsonRes = JSON(["type":"res","param1":resultTxt,"param2":txt])
                self.alipayResult?(jsonRes)
                
            })
            return true
        }
        return true

    }
}

