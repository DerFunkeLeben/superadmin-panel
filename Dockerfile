FROM alpine:3.12.3
RUN apk add --update --no-cache ansible openssh openrc git curl rsync bash && rm -rf /var/cache/apk/* && rc-update add sshd
ENV ANSIBLE_GATHERING smart
ENV ANSIBLE_HOST_KEY_CHECKING false
ENV ANSIBLE_RETRY_FILES_ENABLED false
ENV ANSIBLE_SSH_PIPELINING True
