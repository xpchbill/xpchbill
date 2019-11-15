internal_interface=$(ip route|egrep "dev br0|dev br-lan"|head -1|cut -d" " -f3)
iptables -t filter -D FORWARD -i $internal_interface -j easucks-FORWARD 2>/dev/null
iptables -t filter -F easucks-FORWARD 2>/dev/null
iptables -t filter -X easucks-FORWARD 2>/dev/null
iptables -t filter -N easucks-FORWARD
iptables -t filter -I FORWARD -i $internal_interface -j easucks-FORWARD
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 13.112.32.135/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 13.230.248.238/32 -j DROP

iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 13.211.52.40/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 13.211.232.151/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 13.233.50.52/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 18.196.167.42/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 18.197.48.114/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 18.206.67.50/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.28.50/31 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 169.57.76.162/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 169.57.76.171/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.200.211/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.200.226/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.203.68/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.203.80/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 34.246.50.222/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 35.154.91.81/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 35.180.144.2/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 52.7.200.53/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 52.47.70.141/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 52.67.114.134/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 52.74.103.186/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 52.220.199.97/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 52.208.122.154/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 54.189.201.217/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 54.190.223.192/32 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 54.232.212.27/32 -j DROP

iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 109.200.215.132 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 109.200.215.140 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 109.200.221.170 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 109.200.221.171 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.165.200 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.165.201 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.28.50 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.28.51 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.36.61 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.36.62 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.42.240 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 159.153.42.241 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 169.38.100.162 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 169.38.100.170 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 169.57.76.162 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 169.57.76.171 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 18.184.251.35 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 18.196.167.42 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 18.197.48.114 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.200.211 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.200.226 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.203.68 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.179.203.80 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.50.104.206 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 185.50.104.221 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 203.195.120.68 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 203.195.122.124 -j DROP
iptables -t filter -A easucks-FORWARD -i $internal_interface -p udp -d 52.58.40.163 -j DROP


if [ $(iptables-save -t filter|grep easucks|wc -l) -gt 1 ]; then
    echo "Succeed!"
    echo "The server region of FIFA20 has been locked to center Asia."
    echo "This lock would exist until the router reboot."
    echo "If center Asia connection failed, you'll be redirect to southern Europe. Try to reboot your router to solve this issue."
    echo ""
    echo ""
    echo "Changelog:"
    echo "[Sep 27, 2019]"
    echo "    FIFA20 center Asia lock is available now."
    echo "    Thanks to JusTanGRock @xbox for sharing the game with me."
    echo "    Happy gaming and YASHENG NEW B!"
else
    echo "Failed!"
    echo "You can try other ways."
fi
