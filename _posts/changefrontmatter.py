#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
reload(sys);
sys.setdefaultencoding("utf8")
from datetime import datetime
import frontmatter
import os

#contacts = {'Simon Papworth' :'simon-papworth','Robert Edge':'robert-edge','David Rooke': 'david-rooke','Dave Russell-Graham':'dave-russell-graham','Corinne Hearne': 'corinne-hearne'}

for iname in os.listdir(os.getcwd()):
  if '.md' in iname.lower():
    with open(iname,'r') as f:
      filecontents = f.read()
      f.close
      filecontents = filecontents.replace('sectors:','categories:')
      #filecontents = filecontents.replace('thumb:','thumbnail_image:')
    with open(iname,'w') as f:
      f.write(filecontents)
      f.close()

# Images in BlogPosts
# in Yaml
# post['thumb'] = post['thumb'].replace('//investessex.co.uk/uploads/','//images-investessex.firebaseapp.com/uploads/')

# in content
# 'http://www.investessex.co.uk/uploads/'  
# AND src='../uploads/'
# TO
# src='//images-investessex.firebaseapp.com/uploads/

# Images in Studies
# in Yaml
# post['heroimg'] = post['heroimg'].replace('//investessex.co.uk/uploads/','//images-investessex.firebaseapp.com/uploads/')
#post['heroimg'] = post['heroimg'].replace('//www.investessex.co.uk/uploads/','//images-investessex.firebaseapp.com/uploads/')
# in content
# post['content'] = post['content'].replace('http://www.investessex.co.uk/uploads/' ,'//images-investessex.firebaseapp.com/uploads/')

