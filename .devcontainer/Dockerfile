FROM node:20

RUN npm install @angular/cli typescript @compodoc/compodoc eslint sass-lint sassdoc husky -g

WORKDIR /agroflorestando-urbano

COPY ./.gitconfig /root/.gitconfig
COPY ./.ssh /root/.ssh
RUN chmod 600 -R /root/.ssh
RUN ssh-add -D && ssh-add /root/.ssh/id_ed25519 || true

ENV LANG C.UTF-8
ENV TZ America/Sao_Paulo

EXPOSE 9229
EXPOSE 4200

CMD [ "/bin/bash" ]
