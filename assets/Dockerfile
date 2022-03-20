FROM m.r tima/blackalpha:public

RUN git clone https://github.com/timashabu/BLACK-ALPHA /root/BLACK-ALPHA
WORKDIR /root/QueenAmdi/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "assets/module.js"]
