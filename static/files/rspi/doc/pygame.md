本文实例讲述了Python基于pygame模块播放MP3的方法。分享给大家供大家参考，具体如下：

安装pygame(可参考：安装Python和pygame及相应的环境变量配置)

pip安装这个whl文件

装完就直接跑代码啦，很短的

import time
import pygame
file=r'C:\Users\chan\Desktop\Adele - All I Ask.mp3'
pygame.mixer.init()
print("播放音乐1")
track = pygame.mixer.music.load(file)
pygame.mixer.music.play()
time.sleep(10)
pygame.mixer.music.stop()

功能：播放音乐10秒后停止

附录

pygame.init() 进行全部模块的初始化，
pygame.mixer.init() 或者只初始化音频部分
pygame.mixer.music.load('xx.mp3') 使用文件名作为参数载入音乐 ,音乐可以是ogg、mp3等格式。载入的音乐不会全部放到内容中，而是以流的形式播放的，即在播放的时候才会一点点从文件中读取。
pygame.mixer.music.play()播放载入的音乐。该函数立即返回，音乐播放在后台进行。
play方法还可以使用两个参数
pygame.mixer.music.play(loops=0, start=0.0) loops和start分别代表重复的次数和开始播放的位置。
pygame.mixer.music.stop() 停止播放，
pygame.mixer.music.pause() 暂停播放。
pygame.mixer.music.unpause() 取消暂停。
pygame.mixer.music.fadeout(time) 用来进行淡出，在time毫秒的时间内音量由初始值渐变为0，最后停止播放。
pygame.mixer.music.set_volume(value) 来设置播放的音量，音量value的范围为0.0到1.0。
pygame.mixer.music.get_busy() 判断是否在播放音乐,返回1为正在播放。
pygame.mixer.music.set_endevent(pygame.USEREVENT + 1) 在音乐播放完成时，用事件的方式通知用户程序，设置当音乐播放完成时发送pygame.USEREVENT+1事件给用户程序。
pygame.mixer.music.queue(filename) 使用指定下一个要播放的音乐文件，当前的音乐播放完成后自动开始播放指定的下一个。一次只能指定一个等待播放的音乐文件。