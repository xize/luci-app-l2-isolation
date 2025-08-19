# See /LICENSE for more information.
# This is free software, licensed under the GNU General Public License v2.

include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI support for l2 isolation
LUCI_DEPENDS:=+luci-base +ebtables-nft

PKG_LICENSE:=GPL-2.0
PKG_MAINTAINER:=Guido Lucassen <dev@anonymous-identity.com>

include ../../luci.mk

# call BuildPackage - OpenWrt buildroot signature