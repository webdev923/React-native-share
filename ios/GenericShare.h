//
//  GenericShare.h
//  RNShare
//
//  Created by Diseño Uno BBCL on 23-07-16.
//  Copyright © 2016 Facebook. All rights reserved.
//


#import <Social/Social.h>
#import <UIKit/UIKit.h>
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTUIManager.h"
#import "RCTLog.h"
#import "RCTUtils.h"
@interface GenericShare : NSObject <RCTBridgeModule>

- (void *) shareSingle:(NSDictionary *)options failureCallback:(RCTResponseErrorBlock)failureCallback successCallback:(RCTResponseSenderBlock)successCallback serviceType:(NSString*)serviceType;
@end
